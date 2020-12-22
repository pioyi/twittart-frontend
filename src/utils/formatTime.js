import fromNow from "fromnow"

export default function formatTime(createdAt) {
    return fromNow(
        new Date(parseInt(createdAt)).toUTCString(), 
        { 
            suffix: true, 
            and: true, 
            max: 2
        }
    )
}