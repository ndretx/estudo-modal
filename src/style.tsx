
import styled from "styled-components";



export const Container = styled.div`
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
height : 100vh;
width : 100vw;
background-color: black;


img{

    height: 60vmin;
    padding: 30px;
    animation: spin 10s linear infinite;
    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    
  
    }
    
      
  
   

`
export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;



`


