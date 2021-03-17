const button = document.getElementsByTagName('button')[0]

const getPosts = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data;
            console.log(`GET posts`, posts);

            let FlexContainer = document.createElement('div');

            posts.map(post => {
                let div = document.createElement('div');
                let title = document.createElement(`h3`)
                let body = document.createElement('p')

                title.innerHTML = post.title
                body.innerHTML = post.body

                FlexContainer.classList.add('flex-container');
                div.classList.add('card');

                div.appendChild(title);
                div.appendChild(body)
                FlexContainer.appendChild(div);
            })
            document.body.appendChild(FlexContainer);

        })
        .catch(error => console.error(error));
};

button.addEventListener('click', () => {
getPosts();

})

