import React from "react";
import { useAccount } from "../../../../store/auth/hooks";
import SidebarSection from "../../../../components/sidebar-section";
import { whoFollowUsers } from "../../../../mock";
import Button from "../../../../components/button";
import UserCard from "../../../../components/user-card";

const WhoFollow = () => {
  const account = useAccount();
  return (
    <aside className="min-h-[225px]">
      <SidebarSection
        title="Kimi takip etmeli"
        more={`connect_people?user_id=${account.id}`}
      >
        {whoFollowUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </SidebarSection>
    </aside>
  );
};

export default WhoFollow;
