import { useDispatch, useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { startNewNote } from "../../store/journal";
import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
    const dispatch = useDispatch();
    const { active, isSaving } = useSelector(state => state.journal )
    

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout>

            {
                (!!active) 
                    ? <NoteView/> 
                    : <NothingSelectedView/> 
            }
            
            <IconButton
                disabled={ isSaving }
                onClick={ onClickNewNote }
                size='large'
                sx={{
                    color:"white",
                    backgroundColor:"error.main",
                    ':hover':{
                        backgroundColor:"error.main",
                        opacity:0.9
                    },
                    position:"fixed",
                    right:50,
                    bottom:50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>
        </JournalLayout>
    );
}
