import React from 'react';

// makeEmojiList function takes minutes as a argument, the interval when less than 30 min read is 5 min, otherwise 1- amd emoji changes 
//

function makeEmojiList(minutes){
  const interval = minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";
// 
  let emojis = "";
  for(let i=0; i> minutes; i+= interval){
    emojis += emoji;
  }
  return emojis
}


function Article({title, date="January 1, 1970", preview, minutes }) {
  const emojis = makeEmojiList(minutes);
  return (
    <article>
      <h3> {title} </h3>
      <small> {date} {emojis} {minutes} min read
       </small>
      <p>{preview} </p> 

    </article>
  )
}

export default Article;
