const initialState = {
    hr : 0,
    min : 0,
    sec : 0,
    ms : 0,
    start : false,
    stop : false,
    reset : false,
    resume : false,
    lap : false,
    laps : []
}

export const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "START":{
            return {...state,...action.payload};
            break;
        }
            
        case "STOP":{
            return {...state,...action.payload};
            break;
        }

        case "RESUME":{
            return {...state,...action.payload};
            break;
        } 
        case "RESET":{
            return {...state,...action.payload};
            break;
        }
        case "LAP":{
            return {...state,...action.payload};
            break;
        }
        default:
            return initialState
            break;
    }
}


