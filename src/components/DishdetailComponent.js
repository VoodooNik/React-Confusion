import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    
    
    function RenderComments({comments}) {
        
        const list = comments.map((comment) => {
            return (
                <ul key={comment.id} className="list-unstyled">
                    <li>
                        {comment.comment}
                    </li>
                    <li>
                        --{comment.author}, {
                                new Intl.DateTimeFormat(
                                    'en-US', 
                                    { day: '2-digit', month: 'short', year: 'numeric' }
                                ).format(new Date(comment.date))
                        }
                    </li>
                </ul>
            )
        });

        return (
            <div>
                <h4>Comments</h4>
                {list}
            </div>
        );

    }

    

    const DishDetail = (props) => {
        if(props.dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish.comments}/>
                        </div>
                    </div>
                </div>
            )
            else{
                return(
                    <div></div>
                )
            } 
        }  
        


export default DishDetail;