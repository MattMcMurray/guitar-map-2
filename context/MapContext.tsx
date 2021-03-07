import { Notes } from "@/model/Note";
import React, { createContext, useContext, useReducer } from "react";

enum ActionType {
  UPDATE_HIGHLIGHTED_NOTES,
}

export type Payload = {
  highlightedNotes?: Notes[];
};

export type Action = {
  type: ActionType;
  payload?: Payload;
};

interface Tuning {
  string1: Notes;
  string2: Notes;
  string3: Notes;
  string4: Notes;
  string5: Notes;
  string6: Notes;
}

interface State {
  tuning: Tuning;
  highlightedNotes: Notes[];
}

const initialState: State = {
  tuning: {
    string1: Notes.E,
    string2: Notes.B,
    string3: Notes.G,
    string4: Notes.D,
    string5: Notes.A,
    string6: Notes.E,
  },
  highlightedNotes: [],
};

type Dispatch = (action: Action) => void;
const MapStateContext = createContext<State | undefined>(initialState);
const MapDispatchContext = createContext<Dispatch | undefined>(undefined);

function appReducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UPDATE_HIGHLIGHTED_NOTES:
      return {
        ...state,
        highlightedNotes: payload.highlightedNotes,
      };
      
    default:
      return state;
  }
}

type ProviderProps = { children: React.ReactNode };

function MapProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <MapStateContext.Provider value={state}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapStateContext.Provider>
  );
}

function useMapState() {
  const context = useContext(MapStateContext);
  if (context === undefined) {
    throw new Error("useMapState must be used within a MapProvider");
  }

  return context;
}

function useMapDispatch() {
  const context = useContext(MapDispatchContext);
  if (context === undefined) {
    throw new Error("useMapDispatch must be used within a MapProvider");
  }
  return context;
}

export { ActionType, MapProvider, useMapState, useMapDispatch };
