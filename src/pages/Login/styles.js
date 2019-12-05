import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    padding-top: 0px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        color: #a4b0be;
    }

    .ant-form-item {
      margin-bottom: .5rem;
    }
      
    .ant-btn-primary {
      margin-top: .5rem;
    }

    a {
      float: right;
    }

    button {
      width: 100%;
    }
    
    @media(min-width: 361px) and (max-width: 767px) {
    form {
        margin:0;
        width: 350px;
        padding: 30px 0px;
      }

    h1 {
      color: #57606f;
      padding: 10px;
      font-size: 2.2rem;
      font-weight: 400;
      margin: 0;
    }  

    img {
      width: 235px;
      margin: 20px 0 -10px 0;
    }
  }

  @media(max-width: 360px) {
    form {
        margin:0;
        width: 100%;
        padding: 30px 0px;
      }

    h1 {
      color: #57606f;
      padding: 10px;
      font-size: 2rem;
      font-weight: 400;
      margin: 0;
    }  

    img {
      width: 250px;
      margin: 20px 0 -10px 0;
    }
  }

  @media(min-width: 768px) {
      form {
        margin:0;
        width: 335px;
        padding: 15px 00px;
      }

      h1 {
        color: #57606f;
        padding: 10px;
        font-size: 24px;
        font-weight: 400;
        margin: 0;
        padding-top: 15px;
        padding-bottom: 0;
      }  

      img {
        width: 198px;
        margin: 30px 0 -10px 0;
      }
    }
`;
