 import styled from "styled-components";


 export const Main = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 justify-content: center;
 color: whitesmoke;

 .input-holder {
    width: 50%;
    height: 100vh;
    background-color: ${({theme}) => theme.primary1};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
        padding: 20px;
    }

    .form-holder {
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        form {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .input {
                width: 100%;
                margin: 5px;
                height: 50px;
                padding: 10px;
                border: 1px solid grey;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 5px;
               &:hover {
                border: 1px solid black;
               }
                input {
                    width: 90%;
                    padding: 10px;
                    height: inherit;
                    background: transparent;
                    border: none;
                    outline: none;
                    font-size: 15px;
                }
                .input-icon {
                    width: 10%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: auto;
                }
            }
            .button {
                width: 100%;
                margin: 5px;
                height: 50px;
                padding: 10px;
                border: 1px solid grey;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 5px;
                background-color: ${({theme}) => theme.primary};
                margin-top: 30px;
               &:hover {
                border: 1px solid black;
               }
                input {
                    width: 90%;
                    padding: 10px;
                    height: inherit;
                    background: transparent;
                    color: whitesmoke;
                    border: none;
                    outline: none;
                    font-size: 20px;
                    outline: none;
                }
            }
        }
    }
    .text-container a {
     color: ${({theme}) => theme.primary};   
    }
 }

 .image-holder {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    .write-holder {
        width: 50%;
        height: 200px;
        margin-top: 20px;
        .write {
            text-align: center;
        }

    }
 }

 `
