import axios from "axios";

export default function getYesOrNo() {
    const URL = "https://yesno.wtf/api/"
    return fetch(URL).then(res => res.json()).then(resonse => {
        const data = resonse;
        if (data!=null) {
            return data
        }
    })
}