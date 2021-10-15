export const state = () => ({
  comments : [
    {
      user: 'علیرضا آقایی  ',
      text: 'این یکی از اولین کتاب هایی بود که در مورد فلسفه خوندم و وافعا به شدت از اون خوشم اومد حتما توصیه میکنم بخونیدش حتا چند بار!!!',
    },
    {
      user: 'نگار حسینی  ',
      text: ' خیلی چرته. ۱۰۶ صفحه رو خوندم هنوز نفهمیدم چی به چیه کی به کیه',
    },
    {
      user: 'محمد  ',
      text: ` سلام
      ارزش وقت گذاشتن داشت اما بعضی قسمت ها نه تنها تسلی بخش نبود که ناامید کننده هم بود. مثلا نظرات شوپنهاور درباره عشق بی رحمانه بود؛ تا جاییکه حتی خود نویسنده در جایی میگه “بهتر است خوانندگانی که قرار است ازدواج کنند چند پاراگراف بعدی را نخوانند”
      ممنون از سایت بسیار خوبتون`
    },
    {
      user: 'ناشناس  ',
      text: ` کتاب به فراخور سلیقه ها و روحیات میتونه تسلی بخش باشه
      قسمت سقراطش عقلانی است به نظرم. نظریات اپیکور هم نسبیه همه جا لذت و جایگزین های اون جواب نمیده.مونتنی بهتر با نظریاتش میشه ارتباط برقرار کرد و اینکه انسان رو یک بعدی نمیبنه.شوپنهاور تعریفش از عشق جامع نیست به نظرم بهترین تعریف از عشق مولوی داده و خیلی بهتر میتونه تسلی بخش برای انسانها باشه. نیچه خیلی خوب از درد و رنج گفته و مفید بودنش برای انسان ولی خودش درک و راهکاری برای رنجش نداشت.
      در کل کتاب خوبیه نکات قابل تامل و ارزشمندی داره که میتونیم استفاده کنیم.`
    },
    {
      user: 'علی  ',
      text: ` با عرض سلام و خسته نباشید
      تعبیر فلاسفه غرب از زندگی و معنا و هدف اون گاهی خیلی نارساست و در برخی جاها به جای فلسفه گویی واقعا فلسفه بافی است .
      این مطلب شامل این کتاب هم می شه و کاش در تحلیل این کتاب به ضعف های اون هم اشاره می کردید ؛ چون شما در ذهن و عقائد مخاطبانتون بسیار تاثیر گذارید .
      کتاب های فلسفی دینی ای که با این رویکرد نوشته می شوند بسیار عقلانی تر و متقن ترند و تصویر بسیار زیباتری را از جهان و انسان ارائه می دهند .
      
      موفق باشید`
    },
    {
      user: 'نیما  ',
      text: ` سلام
      فلسفه و حوزه فکر مجزا از دین نیست و هر تفکری منبع و منشا مشخصی داره و به همین دلیل بین فلاسفه و متفکرین نظرات مختلف و متضاد بیان گردیده است و ضمن احترام به نظر شما باید این واقعیت را پذیرفت که فیلسوفانی که نگاه توحیدی دارند به قول مخاطب قبلی(علی) تصویر زیباتری از جهان و انسان ارایه میکنند`
    },
  ]
})


export const mutations={
    addcomment(state,comment){
        state.comments.push(comment)
    }
}
export const strict = false
