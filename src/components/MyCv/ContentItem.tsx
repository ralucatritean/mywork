import React from "react";

interface ContentItemProps{
    title: string,
    texts:string[]
}

const ContentItem: React.FC<ContentItemProps> = ({title,texts}) => {
    return (
    <>
    <h2>{title}</h2>
    {texts.map((text: string,index)=>{
        return(
            <p key={index} dangerouslySetInnerHTML={{ __html: text }}/>
        )
    })}
   
    </>);
}

export default ContentItem;