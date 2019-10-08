//  $(document).ready(() => {
//      alert("Documento")
// })


// $(".navbar").toggle();

// .hide();
// .skudeUp(tiempo, callback);


// $(".navbar").slideUp(2000, () => {
//     alert("navbar oculto");
// });




const entriesArray = 
    [{
        title: "entrada 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat blanditiis, suscipit eum voluptas esse animi culpa saepe laborum harum corporis necessitatibus inventore odio. Veritatis cumque porro iusto asperiores aut excepturi minima molestias nisi expedita alias!",  
        createDate:"5/10/19"
    },
    {
        title: "entrada 2",
        content: "Corporis necessitatibus inventore odiolias!",
        createDate:"2/10/19"
    },
    {
        title: "entrada 3",
        content: "Corporis necessitatibus inventore odiolias!",
        createDate:"2/10/123129"
    },
    {
        title: "entrada cuatro",
        content: "Corporis necessitatibus inventore odiolias!",
        createDate:"2/10/123129"
    },
    {
        title: "entrada 5555555555",
        content: "Corporis necessitatibus inventore odiolias!",
        createDate:"2/10/123129"
    }
]

//$(".entries-wrapper").append(htmlManecito)
var htmlManecito = ` <div class="col-12 col-lg-6">
<div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="https://picsum.photos/200/300" class="card-img" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text-mine">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text2"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>

</div>`



entriesArray.forEach(({title, content },index) => {
    $(".entries-wrapper").append(htmlManecito);
    console.log(title)
    $(`.card:eq(${index}) .card-title`).text(`${title}`);
    $(`.card:eq(${index}) .card-text-mine`).text(`${content}`);
}
)






// $(".card:eq(0) .card-title").text(`${entriesArray[0].title}`)
// $(".card:eq(1) .card-title").text(`${entriesArray[1].title}`)
// $(".card:eq(0) .card-text-mine").text(`${entriesArray[0].content}`)
// $(".card:eq(1) .card-text-mine").text(`${entriesArray[1].content}`)



// console.log(`cantidad de cartas ${ $(".card").length }` ) 

// $(".card-title-mine").text(`${entriesArray.title}`)

// $(".card-text").text(`${entriesArray.content}`)