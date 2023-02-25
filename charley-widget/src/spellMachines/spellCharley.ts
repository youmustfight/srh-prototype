import { subYears } from "date-fns";
import { assign } from "xstate";
import { CANCEL_STATE, CONTENT_NODE_SUBMIT, createLocalId, createSpell, INTERVIEW_INTRO_STATE, SAVE_STATE } from "@xstate-wizards/spells";
import { STATES } from "../consts";

export const ID_SPELL_CHARLEY = "spellCharley";

export const machineMapping = createSpell({
  key: ID_SPELL_CHARLEY,
  version: "1",
  config: {
    initial: INTERVIEW_INTRO_STATE,
    title: "Charley",
    exitTo: "/",
    sectionsBar: [],
  },
  editor: {},
  models: {
    User: { loader: {} },
  },
  schema: {
    type: "object",
    properties: {
      states: {
        type: "object",
        properties: {
          stateLivedIn: { type: ["string", "null"], default: null },
        },
      },
    },
  },
  states: {

    [INTERVIEW_INTRO_STATE]: {
      content: (ctx) => [
        {
          type: "p",
          text: "Hi, I'm Charley. I'm here to help you figure out your options for ending a pregnancy now or in the future. First, tell me what brought you here today: ",
        },
        CONTENT_NODE_SUBMIT,
      ],
      on: {
        SUBMIT: { target: "locationAsk" },
      },
    },

    locationAsk: {
      content: (ctx) => [
        { type: "p", text: "Where state do you currently reside?" },
        { type: "small", text: "Will switch this to zipcode later" },
        {
          type: "select",
          label: "State",
          options:  Object.entries(STATES).map(([abbrev, stateName]) => ({
            text: stateName,
            value: abbrev,
          })),
          assign: "states.stateLivedIn",
          validations: ['required'],
        },
        CONTENT_NODE_SUBMIT,
      ],
      on: {
        SUBMIT: "ageAsk",
      },
    },

    ageAsk: {
      content: (ctx) => [
        { type: "p", text: "Are you over 18?" },
        {
          type: "radioSelect",
          options: [
            { value: true, text: "Yes" },
            { value: false, text: "No" },
          ],
          assign: "states.isOver18",
          validations: ['required'],
        },
        CONTENT_NODE_SUBMIT,
        // birthdate if we want it
        // {
        //   type: "input",
        //   inputType: "age",
        //   label: "Pick your age!",
        //   assign: "states.age",
        //   validations: ["required"],
        //   attrs: { size: "sm" },
        // },
      ],
      on: {
        SUBMIT: "lastMenstralPeriodAsk",
      },
    },

    lastMenstralPeriodAsk: {
      content: (ctx) => [
        { type: "p", text: "LMP" },
        {
          type: "input",
          inputType: "date",
          label: "Date",
          assign: "states.lmpDate",
          validations: ["required"],
          dateStart: subYears(new Date(), 1),
          dateEnd: new Date(),
        },
        CONTENT_NODE_SUBMIT,
      ],
      on: {
        SUBMIT: [],
      },
    },

    referToSelfManage: {},

    referToAbortionFinder: {},

    referToMaHotline: {},

    referToReproLegalHelplineAndAidAccess: {},

  },
});

