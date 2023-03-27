import React from 'react'
import { faker } from '@faker-js/faker';
import { List } from 'react-virtualized';

function Virtualize() {

    const [data, setData ] = React.useState([...new Array(90000)].fill(0).map((ele, index) => {
        return {
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
            content: faker.hacker.phrase(),
            image: "https://mdbootstrap.com/img/Photos/Others/images/43.webp"
        }
    }));


    const rowCount = 5000;
    const listHeight = 1000;
    const rowHeight = 100;
    const rowWidth = 1000;

    function renderRow({ index, key, style } ) {
        return (
            <div key={key} style={style} className="row">
                id:{index + 1}
                <div className="image">
                    <img
                        style={{

                            backgroundSize: "100% 100%",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%"
                        }}
                        src={data[index].image} alt="" />
                </div>
                <div className="content">
                    <div>{data[index].username}</div>
                    <div>{data[index].content}</div>
                </div>
            </div>
        );
    }


    return (
        <div>

            <h1 className='text-center'> React-virtualization of 90000 employees at a time </h1>

            <div
                style={{
                    display: "flex",
                    width: "100vw",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center"
                   }}
               >

                <div >
                    <List
                        width={rowWidth}
                        height={listHeight}
                        rowHeight={rowHeight}
                        rowRenderer={renderRow}
                        rowCount={data.length}
                        overscanRowCount={3} 
                        />

                    {/*

            data.map((ele ,ind) => {
                return (
                    <React.Fragment>
                        <div key={ele.userId} class="card" >
                           {ind+1}
                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.webp" alt="Card image cap"
                           style={{

                                backgroundSize: "100% 100%",
                                width: "fit-content",
                                height:" 168px"                                

                           }}
                            />
                            <div class="card-body">
                                <h4 class="card-title"><a>{ele.username}</a></h4>
                                <p class="card-text">{ele.content}</p>
                                <a href="#" class="btn btn-primary">Button</a>
                            </div>
                        </div>
                    </React.Fragment>
                )
                    })
                    */}


                    
                </div>

            </div>

        </div>
    )
}



export default Virtualize