import {
   UPDATE_EMAIL,
   UPDATE_FIRST_NAME,
   UPDATE_LAST_NAME,
   UPDATE_APPLICANT,
   UPDATE_AGE_RANGE,
   UPDATE_LOCATION,
   UPDATE_REFERENCE,
   UPDATE_SERVICE,
   UPDATE_ISSUE,
   UPDATE_REASON,
   SUBMIT_PPA,
} from '../actions/ppa.actions';

const initialState = {
   email: '',
   first_name: '',
   last_name: '',
   applicant: '',
   age: '',
   reference: '',
   location: '',
   service: '',
   issue: '',
   reason: '',
};

export default (state = initialState, {type, payload}) => {
   switch (type) {
      case UPDATE_EMAIL:
         return {...state, email: payload.email};
      case UPDATE_FIRST_NAME:
         return {...state, first_name: payload.first_name};
      case UPDATE_LAST_NAME:
         return {...state, last_name: payload.last_name};
      case UPDATE_APPLICANT:
         return {...state, applicant: payload.applicant};
      case UPDATE_AGE_RANGE:
         return {...state, age: payload.age};
      case UPDATE_REFERENCE:
         return {...state, reference: payload.reference};
      case UPDATE_LOCATION:
         return {...state, location: payload.location};
      case UPDATE_SERVICE:
         return {...state, service: payload.service};
      case UPDATE_ISSUE:
         return {...state, issue: payload.issue};
      case UPDATE_REASON:
         return {...state, reason: payload.reason};
      case SUBMIT_PPA:
         return {
            ...state,
            email: payload.email,
            first_name: payload.first_name,
            last_name: payload.last_name,
            applicant: payload.applicant,
            age: payload.age,
            reference: payload.reference,
            location: payload.location,
            service: payload.service,
            issue: payload.issue,
            reason: payload.reason,
         };
      default:
         return state;
   }
};
