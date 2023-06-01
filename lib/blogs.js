const blogs = [
    {
        id:1,
        title: "Blog 1",
        author: "abc",
        image:"/portfolio__1.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-1",
        date:   "23 May, 2002",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    },


    {
        id:2,
        title: "Blog 2",
        author: "bcd",
        image:"/portfolio__2.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-2",
        date:   "23 May, 2011",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    },

    {
        id:3,
        title: "Blog 3",
        author: "def",
        image:"/portfolio__3.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-3",
        date:   "23 May, 2016",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    },

    {
        id:4,
        title: "Blog 4",
        author: "abc",
        image:"/portfolio__1.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-4",
        date:   "23 May, 2013",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    },

    {
        id:5,
        title: "Blog 5",
        author: "abc",
        image:"/portfolio__1.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-5",
        date:   "23 May, 2012",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    },

    {
        id:6,
        title: "Blog 6",
        author: "abc",
        image:"/portfolio__1.png" ,
        excerpt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, soluta?",
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium quo quas eum corrupti repudiandae perspiciatis laudantium harum rem molestias ipsam illo tempore iusto, asperiores ea. Dignissimos, inventore? Rerum odit eos necessitatibus quis incidunt et magnam est veritatis quisquam mollitia commodi, fuga delectus impedit nam atque ratione facilis doloribus sint libero quae nulla. Commodi harum nisi tenetur expedita eos autem?',
        slug: "blog-6",
        date:   "23 May, 2022",
        author_image: "/dev_img2.png",
        author_position: "Econnomist"
    }

]

export function getAllBlogs(){
     return blogs;
}

export function getAllSlugs(){
    let slugs = [];
    getAllBlogs().map(p => slugs.push(`/blogs/${p.slug}`));
    return slugs;
}

export function getPostData(slug){
let post = null;
getAllBlogs().map((p) => {
    if (p.slug === slug){
        post = p;
        return;
    }
});
return post;
}

export function getAllTitles(){
    let titles = [];
    getAllBlogs().map(p => titles.push(`${p.title}`));
    return titles;
}