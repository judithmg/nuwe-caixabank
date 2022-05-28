import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

const Calendar: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (date: Date) => {
    setIsOpen(!isOpen);
    setStartDate(date);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleClick}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            {startDate.toLocaleDateString()}
          </Text>
          <AiOutlineCalendar />
        </View>
      </Pressable>
      {isOpen && (
        <View style={styles.calendar}>
          <DatePicker selected={startDate} onChange={handleChange} inline />
        </View>
      )}
    </View>
  );
};

export default Calendar;
