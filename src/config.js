const dev = {
    api: {
        projects: "http://localhost:3001/projects"
    },
    content: "http://localhost:3000/"
}

const prod = {
    api: {
        projects: "YOUR_API_HERE"
    }
}

const config = process.env.ENVIRONMENT === 'production' ? prod : dev;

export default{
    ...config
};
