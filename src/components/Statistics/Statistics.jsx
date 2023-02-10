import PropTypes from 'prop-types';
import { StatSection, TitleText, StatList, StatItem, StatLabel, StatValue } from './Statistics.styled';
import { randomColor } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
    return <StatSection>
        <TitleText>{title}</TitleText>

        <StatList>
            {stats.map(stat => (<StatItem key={stat.id} style={{ backgroundColor: randomColor() }}>
                <StatLabel>{stat.label}</StatLabel>
                <StatValue>{stat.percentage}%</StatValue>
            </StatItem>))}
        </StatList>
    </StatSection >
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        }),
    ),
}

