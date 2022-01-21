let rerenderEntireTree = () => {
    
}

let state = {
    profilePage: {
        postsData: [
            {
                id: 1,
                text: `post 1`,
                likes: 1
            },
            {
                id: 2,
                text: `post 2`,
                likes: 14
            },
            {
                id: 3,
                text: `post 3`,
                likes: 32
            },
            {
                id: 4,
                text: `post 4`,
                likes: 8
            },
        ],
        newPostText: 'enter text'
    },

    dialogsPage: {
        messagesData: [
            {
                id: 1,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    aliquid impedit assumenda corrupti commodi temporibus, repellendus sunt a sapiente odit,
                    nemo laboriosam necessitatibus amet. Debitis provident obcaecati eius aut natus!`
            },
            {
                id: 2,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                text: `Hello world`
            },
            {
                id: 3,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                text: `ok google how to write`
            }
        ],
        dialogsData: [
            {
                id: 1,
                name: "Andrew"
            },
            {
                id: 2,
                name: "Maria"
            },
            {
                id: 3,
                name: "Alex"
            },
            {
                id: 4,
                name: "Nadya"
            },
        ],
        newMessageText: 'enter text'
    },

    navPage: {
        friendsData: [
            {
                id: 1,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                name: `Masha`
            },
            {
                id: 2,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                name: `Sasha`
            },
            {
                id: 3,
                src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
                name: `Dasha`
            }
        ]
    }
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const addPost = () => {
    let newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);

    rerenderEntireTree();
    updateNewPostText('');
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        src: `https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png`,
        text: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage);
    rerenderEntireTree();
    updateNewMessageText('');
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;