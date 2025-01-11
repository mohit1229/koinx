import Card from "./Card";
import Header from "./Header";
const ResponsiveLayout = () => {
  return (
    <div>
<Header />
 
    <div className="container mx-auto p-4 md:bg-white">
      {/* Main wrapper with grid layout for easier reordering */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* First component - order-1 on mobile, order-1 on desktop */}
        <div className="p-6 order-1 lg:order-1">
        <Card>
          <h2 className="text-xl font-bold mb-4">First Component</h2>
          <p>This is the first component. In desktop view, it appears in the left column.</p>
        </Card>
        </div>

        {/* Second component - order-3 on mobile, order-2 on desktop */}
        <div className="p-6 order-3 lg:order-2">
        <Card>
          <h2 className="text-xl font-bold mb-4">Second Component</h2>
          <p>This is the second component. In desktop view, it appears in the right column.</p>
        </Card>
        </div>

        {/* Third component - order-2 on mobile, order-3 and full width on desktop */}

        <div className="p-6 order-2 lg:order-3 lg:col-span-2">
        <Card>
          <h2 className="text-xl font-bold mb-4">Third Component</h2>
          <p>This component appears between the other two on mobile, and as a footer on desktop.</p>
        </Card>
        </div>

      </div>
    </div>
    </div>

  );
};

export default ResponsiveLayout;