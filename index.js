
let text = document.querySelector('#text');

let higlight = document.querySelector('#higlight');

let striked = document.querySelector('#striked');

let warningText = document.querySelector('#warnP');


// find at least six character at text without ',' and '.'

let wordArr= text.innerText.replace(/\.|,/g,' ').split(' ');

let findSixCharacter = () =>
{  
    let ourWord =wordArr.filter(element=>element.length > 6)
   
   return ourWord[Math.floor(Math.random() * ourWord.length)]
}


// colored that and push that for strike function

function colored()
{ 
 let word = findSixCharacter();

  let newText = wordArr.map(element=>
  {
   if(element == word)
  {
    strikeArr.push(word); // fill the strikeArr

    return '<span class="color">' + element + '</span>'

  }
   else
  {
    return element 
  }

  }).join(' ');
  text.innerHTML = newText;
}

// strike-through all the highlighted words

let strikeArr=[]; 

function strikeAll ()
{
  let allColored = wordArr.map(element=>
    {
      if(strikeArr.includes(element))
      {
        return '<span class="strike">' + element + '</span>'
      }
      else
      {
        return element 
      }
    
      }).join(' ');
      text.innerHTML = allColored;
    
}

// DOM 

higlight.onclick = () => { colored() }

striked.onclick = () => 
{ 
  strikeArr.length == 0 ?
  warningText.removeAttribute('hidden'): 
  strikeAll() ;
}













