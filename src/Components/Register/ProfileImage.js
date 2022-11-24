import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';
const ProfileImage = () => {
    const [imageCrop,setImageCrop] = useState(false);

    const onCrop =(view)=>{
        setImageCrop(view);
    }
    const onClose=()=>{
        setImageCrop(null)
    }
    return (
        <div>
        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}

        />
        <img src={this.state.preview} alt="Preview" />
  
        </div>
    );
};

export default ProfileImage;