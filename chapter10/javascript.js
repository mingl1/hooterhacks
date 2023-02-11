const gryphon = document.querySelector('.gryphon');
const turtle = document.querySelector('.mock-turtle');

const t_song = "Beautiful Soup, so rich and green,\
\nWaiting in a hot tureen!\
\nWho for such dainties would not stoop?\
\nSoup of the evening, beautiful Soup!\
\nSoup of the evening, beautiful Soup!\
\n    Beau—ootiful Soo—oop!\
\n    Beau—ootiful Soo—oop!\
\nSoo—oop of the e—e—evening,\
\n    Beautiful, beautiful Soup!\n\
\n“Beautiful Soup! Who cares for fish,\
\nGame, or any other dish?\
\nWho would not give all else for two p\
\nennyworth only of beautiful Soup?\
\nPennyworth only of beautiful Soup?\
\n    Beau—ootiful Soo—oop!\
\n    Beau—ootiful Soo—oop!\
\nSoo—oop of the e—e—evening,\
\n    Beautiful, beauti—FUL SOUP!";

const g_turtle = "“’Tis the voice of the Lobster; I heard him declare,\
“You have baked me too brown, I must sugar my hair.”\
As a duck with its eyelids, so he with his nose\
Trims his belt and his buttons, and turns out his toes.\
[later editions continue as follows:\
When the sands are all dry, he is gay as a lark,\
And will talk in contemptuous tones of the Shark,\
But, when the tide rises and sharks are around,\
His voice has a timid and tremulous sound.”]";

const text = document.querySelector('.song');

gryphon.addEventListener('click', function() {
    text.innerHTML = g_turtle;
})

turtle.addEventListener('click', function() {
    text.innerHTML = t_song;
})