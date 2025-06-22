function e(id) { return document.getElementById(id) }

const leoelslider = e('leoelslider');
const leoelauthor = e('leoelauthor');
const leoelcontent = e('leoelcontent');
const bom = e('bomtext');
const bomslider = e('bomslider');
const bomimg = e('bomimg');
leoelslider.value = 0;
bomslider.value = 0;

const leoelauthors = [
    "The Conversation",
    "ABC",
    "Fox News"
]
const leoelcontents = [
    `<strong>First Paragraph:</strong> Robert Prevost — the first pontiff born in the United States — has been elected to become Pope Leo XIV.
    <br><br><strong>What do they think of this?</strong> The prospect of a US pope had long been taboo, given the country's significant geopolitical power. 
    <br><br><strong>How do they characterise Pope Leo?</strong> Pope Francis brought Prevost to the Vatican in 2023 as the powerful head of the office that vets bishop nominations, one of the most important jobs in the Catholic Church.
    <br><br>The Chicago native evoked his broad experience … saying not a word in English
    <br><br>[He] emphasised a message of "a disarmed and disarming peace" dialogue and missionary evangelisation.<br><br><br><br><br>`,
    `<strong>First Paragraph:</strong> Pope Leo XIV has been elected as the 267th pontiff, leader of the Catholic church and spiritual guide to more than 1.4 billion Catholics. He is the first pope in history to come from the United States.
    <br><br><strong>What do they think of this?</strong> ... the influence of the United States within the Catholic Church has steadily increased … signalling a shift away from traditional European dominance.
    <br><br>This growing influence had long been accompanied by unease over the idea of entrusting the leadership of the global Catholic community to a figure from the world’s most powerful nation. In this sense, the election of Leo XIV is an unexpected and significant choice.
    <br><br><strong>How do they characterise Pope Leo?</strong> [He] spent much of his ecclesiastical life to date in Peru, where he became a respected figure within the local church.
    <br><br>Prevost ... was widely regarded as a stabilising, pastoral presence<br><br><br><br>`,
    `<strong>First Paragraph:</strong> Pope Leo XIV, 69, was elected to take up the papal seat on Thursday, on the second day of the papal conclave’s deliberations. 
    <br><br><strong>What do they think of this?</strong> [There were]  concerns that the U.S. could further exert its geopolitical prowess through the religious leader. 
    <br><br><strong>How do they characterise Pope Leo?</strong> Leo XIV was first brought to the Vatican by Francis to serve as prefect of the Dicastery for Bishops in January 2023, which is one of the most important positions in the Catholic Church as it vets bishop nominations issued globally. 
    <br><br>Leo was reported to be closely aligned to Francis's teachings
    <br><br>[He] has voted in Republican primaries more so than those for Democrats
    <br><br>"Known for his humility, gentle spirit, prudence and warmth, Pope Leo XIV's leadership offers an opportunity to reaffirm our commitment to our educational mission."
    <br><br>[Trump wrote,] "What excitement, and what a Great Honor for our Country"`
];
const bomcontents = [
    `<h3>From the Conversation:</h3>
    <strong>Bias</strong>
    <br><br>
    The Conversation is a progressive-leaning publisher that focuses on an academic and analytical approach. Therefore, they are likely to emphasise social justice, critique conservatism, and view religion through a political lens. 
    The author, Massimo D'Angelo, has an academic, holding a PhD in a thesis on Turkey's national identity and the Catholic Church's actions in Europe. As a result, his reporting on the Church is reliable but at times critical, and he is slightly progressive leaning.
    <br><br>
    <strong>Language and Framing</strong>
    <br><br>
    It emphasises the importance of an American pope and portrays the election as a shift in power. 
    The concerned tone toward U.S. geopolitical dominance is evident in the phrase “accompanied by unease”, where the article challenges the perception of religious and political safety. In the phrase, “signalling a shift away from traditional European dominance”, the article uses a warning tone to suggest that America is diplomatically using religion to take political control of Europe. 
    <br><br>
    <strong>Effect on Public Perception</strong>
    <br><br>    
    The article may lead viewers to see the event as a political move. Readers may feel cautious about America’s growing influence in faith, potentially polarising them. The article may be seen as an attempt to defend Catholicism.<br><br><br>
    `,
    `<h3>From the ABC:</h3>
    <strong>Bias</strong>
    <br><br>
    The ABC News article was published on May 9 2025. While the article does not list a specific author, it is leaning slightly progressive. It addresses the significance of how the election shifts the position of the Pope to America. The article subtly emphasises the United States' geopolitical influence. However, it doesn’t condemn the election, but instead, portrays Pope Leo as a humble and global-minded leader who disagrees with nationalism. 
    <br><br>
    <strong>Language and Framing</strong>
    <br><br>
    The language used in the article is formal and respectful, with a praising tone in “saying not a word in English,” which suggests that everyone should be optimistic. It avoids emotional or accusatory wording, instead focusing on peace and unity brought by the new pope. Phrases like “a disarmed and disarming peace” and “broad experience” portray Pope Leo as someone who follows Pope Francis’s ideologies of dialogue and global outreach. This framing distances the new pope from conservative or nationalist views, instead framing him as an inclusive leader.
    <br><br>
    <strong>Effect on Public Perception</strong>
    <br><br>    
    The article is likely to have a positive effect on public perception, especially in progressive and neutral Catholics. By emphasising Pope Leo’s humility and focus on the world, it reassures viewers that his American nationality will not negatively affect his role as pope. The article may also appeal to secular audiences who are cautious about religion being used for political gains, as the article portrays Pope Leo as apolitical. Traditionalist or conservative viewers may still feel cautious about the progressive ideologies that Pope Leo follows. Ultimately, this ABC news article is a great example of how the media can report on events in a generally objective way. 
    `,
    `<h3>From Fox News:</h3>
    <strong>Bias</strong>
    <br><br>
    The Fox News creates a conservative portrayal of Pope Leo XIV’s election. Fox News generally leans conservative in its political and cultural coverage, emphasising Pope Leo's significance as the first American pope and connects his election to American nationalism. 
    <br><br>
    <strong>Language and Framing</strong>
    <br><br>
    The tone is mostly respectful and affirming, with facts that emphasise the pope being American. Focus on phrases like “great honour” and “What excitement” portray national pride in the pope’s nationality, resonating with viewers who feel a strong connection between religious leadership and American identity. 
    Fox frames Pope Leo XIV as a symbol of American values, portraying his U.S. identity as an asset to the Church. Fox News includes Trump’s congratulations on TruthSocial, which aligns the American pope with conservatism, and it implies that Pope Leo XIV’s election serves as a cultural victory for America. 
    <br><br>
    <strong>Effect on Public Perception</strong>
    <br><br>    
    Fox News' reporting will likely appeal to conservative Catholics and patriotic Americans who view the Catholic Church as part of the American character. It reinforces the belief that the pope is with US values. This causes conservative Americans to expect more American views from the pope.
    While progressive or neutral audiences may view the emphasis on American national identity with scepticism and worry about the position of the pope becoming a political weapon. This further polarises people into disagreement on the effects of Pope Leo’s national identity on his views and actions as Pope.
    `
];
const bomimgs = [
    "left.svg",
    "middle.svg",
    "right.svg"
]

let i = leoelslider.value;
leoelauthor.innerHTML = leoelauthors[i];
leoelcontent.innerHTML = leoelcontents[i];
let j = bomslider.value;
bom.innerHTML = bomcontents[j];
bomimg.src = bomimgs[j];

leoelslider.addEventListener("input", (e) => {
    let i = leoelslider.value;
    leoelauthor.innerHTML = leoelauthors[i];
    leoelcontent.innerHTML = leoelcontents[i];
});
bomslider.addEventListener("input", (e) => {
    let j = bomslider.value;
    bom.innerHTML = bomcontents[j];
    bomimg.src = bomimgs[j];
})