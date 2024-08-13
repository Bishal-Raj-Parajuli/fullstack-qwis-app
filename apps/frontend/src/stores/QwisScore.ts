import { create } from 'zustand'

type Score = {
  score: number
  setDefaultScore: () => void
  increaseScore: () => void
}

type Status = {
    timerStatus: boolean
    setDefaultTimerStatus: () => void
    changeTimerStatus: () => void
}

const useQwisScore = create<Score>()((set) => ({
  score: 0,
  setDefaultScore: () => set({score: 0}),
  increaseScore: () => set((state) => ({ score: state.score + 10 })),
}))

const useQwisStatus = create<Status>()((set) => ({
    timerStatus: true,
    setDefaultTimerStatus: () => set({timerStatus: true}),
    changeTimerStatus: () => set((state) => ({ timerStatus: !state.timerStatus })),
  }))

export { useQwisScore, useQwisStatus }
