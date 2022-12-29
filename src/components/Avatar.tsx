import styles from "./Avatar.module.scss"

interface avatarProps {
    src: string
    hasBorder: boolean
}

export const Avatar = (props: avatarProps) => {

    return (
            <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />
    )
}