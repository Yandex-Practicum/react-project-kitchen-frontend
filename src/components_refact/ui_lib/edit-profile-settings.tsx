import React, { FC } from "react";
import { Link } from "react-router-dom";

export const EditProfileSettings: FC<{ isUser: boolean }> = ({isUser}) => {
    if (isUser) {
        return (
            <Link
                to="/settings"
                className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i> Edit Profile Settings
            </Link>
        );
    }
    return null;
};