import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <form>
            <section>
                <Link to="/register">
                    <button>
                        Registration Form
                    </button>
                
                </Link>
                <br/>
                <Link to="/login">
                    <button>
                        Login Form
                    </button>
                
                </Link>
                <br/>
                <Link to="/to-do-list">
                    <button>
                        To-Do List Page
                    </button>
                </Link>
            </section>
        </form>
        
    )
};

export default Home;