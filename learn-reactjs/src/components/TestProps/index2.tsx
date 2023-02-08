import React from "react";

interface TestPrps2 {
    source?: string;
}

const TestProps2: React.FC<TestPrps2> = (props) => {
    const { source = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" } = props;

  return <img style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} src={source} alt="profile" />;
};

export default TestProps2;
