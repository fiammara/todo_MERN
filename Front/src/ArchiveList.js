import React, { Component } from 'react';
// import axios from 'axios';
import ArchiveItem from './ArchiveItem';
import api from './api';

class ArchiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        archived: [],
        isLoading: false
    };
}

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    // eslint-disable-next-line import/no-named-as-default-member
    await api.getAllArchive().then((archived) => {
        this.setState({
          archived: archived.data.data,
          isLoading: false,
        });
    });
}

  render() {
    const { archived, isLoading } = this.state;
    return (
      <div className="archiveList">
        <p> Archive list </p>
        <table className="table">
          <tbody>
            {archived.map((post, index) => (
              <ArchiveItem 
                name={post.name} 
                key={post._id} 
                arrayId={index} 
                loading={isLoading}
              />
            ))}
          </tbody>
        </table>
        
        <br />
      </div>
    );
  }
}

export default ArchiveList;
