This is to configure firebase db on your project;

It includes the CRUD methods;


#some notes on react:

# npx create-react-app <directory-name>

React.Fragment =  whicch help us to rapo rap react components without the usage of unwanted DOM element;

createContext(initialValue) = a hook used to create a global state to pass down to its child nodes, which are wrapped with in a provider (API);

useState(initialState) = a hook used to store values and change dynamically in the DOM || it takes a initial state value and return us with current state and a function to update the current state. It came out as an array we need to Destucture it ;

useContext(contextName) = is used to get the context that created using createContext, it collect the datas from the nearby provider;

useEffect(()=>{ return() },[dependency-values]) = used to give side effects while mounting, updating and unmounting of component;

React.StrictMode = reason for using strict mode is to detect bugs while in development mode;

# npm install react-router-dom 

usenavigate('/route') = which help us to navigate easily among pages;

-------------------

#some notes on firebase

# npm install firebase

firebase/compat/auth = it is used to authenticate the users in the database and handle data in the local storage;

firebase/compat/storage = it is to store solid file datas like image and which return us with a url of the file;