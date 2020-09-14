import React, { useState, useCallback, useEffect } from 'react';

import {
  Container,
  Button,
  ButtonContainer,
  PomodoroButton,
  PomodoroContainer,
} from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const alarmSound = require('../../assets/oogah_horn05.wav');

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('pomodoro');
  const [breakTimer, setBreakTimer] = useState(0);
  const [clicked, setClicked] = useState('');

  const alarmAudio = new Audio(alarmSound);

  const playSound = (audioFile: HTMLAudioElement) => {
    audioFile.play();
  };

  useEffect(() => {
    let interval: number;

    if (seconds === 0 && minutes === 0) {
      setIsActive(false);
      playSound(alarmAudio);
    }

    if (isActive && seconds === 0) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(activeSeconds => activeSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, isActive, minutes, alarmAudio]);

  const pomodoro = useCallback(() => {
    setMinutes(25);
    setSeconds(0);

    setMode('pomodoro');
    setClicked('pomodoro');
  }, []);

  const shortBreak = useCallback(() => {
    setMinutes(4);
    setSeconds(0);

    setMode('short break');
    setClicked('short break');
  }, []);

  const longBreak = useCallback(() => {
    setMinutes(10);
    setSeconds(0);
    setMode('long break');
    setClicked('long break');
  }, []);

  useEffect(() => {
    if (
      mode === 'pomodoro' &&
      minutes === 0 &&
      seconds === 0 &&
      breakTimer < 4
    ) {
      shortBreak();
      setMode('short break');
      setBreakTimer(breakTimer + 1);
    } else if (
      mode === 'short break' &&
      breakTimer < 4 &&
      minutes === 0 &&
      seconds === 0
    ) {
      setMode('pomodoro');
      pomodoro();
    } else if (breakTimer === 4) {
      longBreak();
      setMode('long break');
      setBreakTimer(0);
    }
  }, [mode, minutes, breakTimer, seconds, longBreak, pomodoro, shortBreak]);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const reset = useCallback(() => {
    setSeconds(59);
    setIsActive(false);

    if (mode === 'pomodoro') {
      setMinutes(24);
    } else if (mode === 'short break') {
      setMinutes(3);
    } else if (mode === 'long break') {
      setMinutes(9);
    }
  }, [mode]);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <Container>
      <PomodoroContainer>
        <PomodoroButton
          onClick={pomodoro}
          color={clicked === 'pomodoro' ? '#0099e6' : '#66ccff'}
        >
          Pomodoro
        </PomodoroButton>
        <PomodoroButton
          onClick={shortBreak}
          color={clicked === 'short break' ? '#0099e6' : '#66ccff'}
        >
          Short Break
        </PomodoroButton>
        <PomodoroButton
          onClick={longBreak}
          color={clicked === 'long break' ? '#0099e6' : '#66ccff'}
        >
          Long Break
        </PomodoroButton>
      </PomodoroContainer>

      <div>
        {minutes}:{seconds}s
      </div>

      <ButtonContainer>
        <Button theme="green" onClick={start}>
          Start
        </Button>
        <Button theme="red" onClick={stop}>
          Stop
        </Button>
        <Button theme="grey" onClick={reset}>
          Reset
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;
