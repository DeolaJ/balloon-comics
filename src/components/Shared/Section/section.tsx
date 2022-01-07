import React, { FC, PropsWithChildren, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { motion } from 'framer-motion';

import PrimaryButton from '../Button/PrimaryButton';
import { fadeInUp } from '../../../animation';

type SectionProps = {
  className?: string;
  style?: CSSProperties;
};

interface SlicedListSectionProps extends SectionProps {
  listLink?: string;
  listType: string;
  complete?: boolean;
  internal?: boolean;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ children, className, style }) => (
  <motion.section
    variants={fadeInUp}
    style={style}
    className={`px-6 sm:px-10 md:px-14 py-12 ${className}`}>
    {children}
  </motion.section>
);

Section.defaultProps = {
  className: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitle: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <motion.h2
    variants={fadeInUp}
    className={`mb-3.5 text-gray-600 tracking-wide uppercase font-semibold text-base ${className}`}>
    {children}
  </motion.h2>
);

SectionTitle.defaultProps = {
  className: '',
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SectionTitleSub: FC<PropsWithChildren<SectionProps>> = ({ children, className }) => (
  <motion.h4
    variants={fadeInUp}
    className={`mb-7 text-gray-800 text-2xl sm:text-3xl md:text-4xl tracking-wide font-semibold ${className}`}>
    {children}
  </motion.h4>
);

SectionTitleSub.defaultProps = {
  className: '',
};

SectionTitleSub.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const SlicedListSection: FC<PropsWithChildren<SlicedListSectionProps>> = ({
  children,
  className,
  listType,
  listLink,
  complete,
}) => (
  <motion.section
    variants={fadeInUp}
    className={`px-6 sm:px-10 md:px-24 lg:px-28 py-10 ${className}`}>
    <>{children}</>

    {complete && (
      <Link href={listLink}>
        <a>
          <PrimaryButton text={listType} className="flex mt-4 mb-12 ml-auto" />
        </a>
      </Link>
    )}
  </motion.section>
);