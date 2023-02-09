import PropTypes from 'prop-types';
import { ProfileCard, ProfileInfo, UsernameText, Tagtext, LocationText, StatList, StatItem, ItemText, ItemValue } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileCard>
            <ProfileInfo>
                <img
                    src={avatar}
                    alt="User avatar"
                    width='200px'
                />
                <UsernameText>{username}</UsernameText>
                <Tagtext>@{tag}</Tagtext>
                <LocationText>{location}</LocationText>
            </ProfileInfo>

            <StatList >
                <StatItem >
                    <ItemText>Followers</ItemText>
                    <ItemValue>{stats.followers}</ItemValue>
                </StatItem >
                <StatItem >
                    <ItemText>Views</ItemText>
                    <ItemValue>{stats.views}</ItemValue>
                </StatItem >
                <StatItem >
                    <ItemText>Likes</ItemText>
                    <ItemValue>{stats.likes}</ItemValue>
                </StatItem >
            </StatList >
        </ProfileCard>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired,
    }),
}