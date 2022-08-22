import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+16138694474">613-869-4474</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:moealamodi@gmail.com">
            moealamodi@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan>Make your website better. Instantly.</Slogan>
        </CompanyContainer>
        <div>
          <SocialIcons href="https://github.com/Moe-alamodi" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/mohammed-al-amodi-b0840b158/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.instagram.com/moealamodi/"
            target="_blank"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </div>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
