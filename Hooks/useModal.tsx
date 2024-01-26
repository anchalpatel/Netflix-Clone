"use client"
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';
import { Movie } from '@/tyscript';

// Define the types for your context
type MovieType = Movie | null;
type SetMovieType = Dispatch<SetStateAction<MovieType>>;
type ShowModalType = boolean;
type SetShowModalType = Dispatch<SetStateAction<ShowModalType>>;

// Define the type for the entire context value
interface ModalContextValue {
  movie: MovieType | null;
  setMovie: SetMovieType;
  showModal: ShowModalType;
  setShowModal: SetShowModalType;
}

// Create the context with the correct type
const ModalContext = createContext<ModalContextValue>({
    movie: null,
    setMovie: function (value: React.SetStateAction<MovieType>): void {
        throw new Error('Function not implemented.');
    },
    showModal: false,
    setShowModal: function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    }
});

// Create a provider component
interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState<MovieType>(null);
  const [showModal, setShowModal] = useState(false);

  const contextValue: ModalContextValue = {
    movie,
    setMovie,
    showModal,
    setShowModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

// Create a custom hook for using the context
export const useModal = (): ModalContextValue => {
  return useContext(ModalContext);
//   if (!context) {
//     throw new Error('useModal must be used within a ModalProvider');
//   }
//   return context;
};
