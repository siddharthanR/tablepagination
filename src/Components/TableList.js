import React ,{Component} from 'react';
import Button from "./Button";

class TableList extends Component{
    
    delete = (id, index) =>{
        this.props.delete(id, index)
    }

    render(){
        return(
            <div>
                <table id="students">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>AlbumId</th>
                            <th>Thumbnail-URL</th>
                            <th>Title</th>
                            <th>URL</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.props.data ? this.props.data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.albumId}</td>
                            <td>{item.thumbnailUrl}</td>
                            <td>{item.title}</td>
                            <td>{item.url}</td>
                            <td><Button onClick={()=>{this.delete(item.id, index)}} btnName={"delete"}/></td>
                        </tr>)
                    ): "no document"}
                </tbody>
                </table>
            </div>
        )
    }
}

export default TableList;