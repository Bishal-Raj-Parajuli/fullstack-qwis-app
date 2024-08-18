import React, { useState } from 'react'
import { useGetOptionList } from '../../hooks/useQwisApi';

interface Props{
    questionId: number
}


export default function Options({questionId}: Props) {
    const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
    const { data: optionList } = useGetOptionList(questionId);
  return (
    <div className="my-4 flex flex-col items-center">
                    {optionList &&  optionList.map((option) => {
                        return (
                          <label
                            key={option.id}
                            className="flex my-2 min-w-96 p-4 bg-secondary rounded-lg items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              className="form-checkbox h-5 w-5 text-blue-600"
                              name="quiz_question"
                              value={option.id}
                              checked={option.id === selectedAnswerId}
                              onChange={() => {
                                setSelectedAnswerId(option.id);
                              }}
                            />
                            <span className="ml-2 text-xl">{option.answer}</span>
                          </label>
                        );
                      })}
                  </div>
  )
}
