export const List = ({ langs }) => {
    return (
        <>
            <ul>
                {
                langs.map((lang,index)=>{
                    return <div key={index}>{lang}</div>
                })
            }
            </ul>
        </>
    )
}