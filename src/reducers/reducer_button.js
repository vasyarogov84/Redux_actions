export default function(state = 'www.google.com', action) {
    switch (action.type) {
       case "BUTTON":
         return action.payload
    }
      return state;
}