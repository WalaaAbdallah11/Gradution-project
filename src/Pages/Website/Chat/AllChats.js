import { MDBCardBody, MDBCol, MDBTypography ,MDBCard,MDBRow ,MDBContainer} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";
import { CONVERSATIONS, baseURL } from "../../../Api/Api";
import { Link } from "react-router-dom";

export default function AllChats() {

  const [Conversations, setConversations] = useState([]);

  useEffect(() => {
    Axios.get(`${baseURL}/${CONVERSATIONS}`)
      .then((data) => {
        setConversations(data.data.users)
        // console.log(data.data.users)

      });
  }, []);

  return (
    <>
    {/* {loading && <Loading></Loading>}    */}
    <MDBContainer fluid className="py-5">   
    <MDBRow>

    <MDBCol md="6" lg="5" xl="4">
      <MDBCardBody>
        <MDBTypography listUnStyled className="mb-0" >
          {Conversations.map((Conversation) => {
            return (
              <div key={Conversation.id} >
                <li
                
                  className="p-2">
                  <Link to={`${Conversation.id}`} style={{ textDecoration: "none" }}>
                    <a href="conversation" className="d-flex justify-content-between chat-A">
                      <div className="d-flex flex-row">
                        <img
                          src={Conversation.thumbnail}
                          alt="avatar"
                          className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                          width="60"
                        />
                        <div className="pt-1">
                          <p className="fw-bold mb-0 chat-name">{Conversation.name}</p>
                          <p className="small text-muted">
                            {Conversation.last_message.message}
                          </p>
                        </div>
                      </div>
                      <div className="pt-1">
                        {/* <p className="small text-muted mb-1">Just now</p> */}
                        {/* <span className="badge bg-danger float-end">1</span> */}
                      </div>
                    </a>
                  </Link>
                </li>
              </div>

            );
          })}

        </MDBTypography>
      </MDBCardBody>
    </MDBCol>
     
        </MDBRow>
             </MDBContainer>

    </>
  )
}