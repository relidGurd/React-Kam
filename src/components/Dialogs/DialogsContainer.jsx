
import {actionAddMessage, actionOnChangeMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (text) => { dispatch(actionOnChangeMessage(text)) },
        addMessage: () => { dispatch(actionAddMessage())}
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer