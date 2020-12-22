import "./AvatarIcon.css"

function AvatarIcon({ user: { profileColor, username }}) {
    return (
        <div className="avatar-icon" style={{ backgroundColor: profileColor }}>
            <p>{ username[0] }</p>
        </div>
    )
}

export default AvatarIcon
