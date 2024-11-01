
const Badge = ({ count }: any) => (
    count > 0 ? <sup className="ml-1 bg-red-600 text-white rounded-full px-1 text-xs absolute">{count}</sup> : null
);

export default Badge;
