import { create } from 'zustand'

type Score = {
  score: number
  increaseScore: () => void
}

type Status = {
    timerStatus: boolean
    setTimerStatus: () => void
}

const useQwisScore = create<Score>()((set) => ({
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 10 })),
}))

const useQwisStatus = create<Status>()((set) => ({
    timerStatus: false,
    setTimerStatus: () => set((state) => ({ timerStatus: !state.timerStatus })),
  }))

export { useQwisScore, useQwisStatus }
