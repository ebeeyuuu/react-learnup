"use client"

import React from 'react';
import { Tabs, TabsList, TabPanel, Tab, tabClasses } from '@mui/base';
import { styled } from '@mui/system';
import { FaRobot, FaStickyNote, FaCalendarAlt } from 'react-icons/fa';
import Brain from '../Icons/Brain';
import Note from '../Icons/Note';

const TabsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  border-bottom: 2px solid white;
`;

const StyledTabsList = styled(TabsList)`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 5px;
`;

const StyledTab = styled(Tab)`
  position: relative;
  color: white;
  padding: 10px 0;
  margin: 0 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background-color: transparent; /* Default background */
  
  &:hover {
    background-color: rgba(255, 255, 255); /* Slight background color on hover */
    color: black;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  &.${tabClasses.selected} {
    background-color: white;
    color: black;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media not all and (min-width: 900px) {
    &.${tabClasses.selected} {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`;

const StyledTabPanel = styled(TabPanel)`
  color: white;
  padding-top: 16px;
`;

export default function HowItWorks() {
  return (
    <div className="flex justify-center mt-[700px] max-[900px]:mt-[200px] transition-all duration-500 ease-in-out mb-[500px]">
      <div className="w-[80vw] max-w-[900px]">
        <div className="flex justify-center uppercase text-[#089b63]/60 text-xl">
          What Sets Us Apart
        </div>
        <div className="text-7xl font-bold flex justify-center mt-[15px] underline decoration-[#ee4d20] decoration-[16px]">
          Features
        </div>
        <div className="flex justify-center w-[50vw] mx-auto text-center mt-[35px] max-w-[480px]">
          We provide all the features you need as a student, all in one place without any hassle!
        </div>
        <Tabs defaultValue={1} className="mt-[50px]">
          <TabsWrapper>
            <StyledTabsList>
              <StyledTab value={1} className="font-semibold text-base max-[900px]:text-xs">
                <FaRobot size={25}/> Study Buddies
              </StyledTab>
              <StyledTab value={2} className="font-semibold text-base max-[900px]:text-xs">
                <FaStickyNote size={25}/> Note-Taking App
              </StyledTab>
              <StyledTab value={3} className="font-semibold text-base max-[900px]:text-xs">
                <FaCalendarAlt size={25}/> Integrated Calendar and Task Manager
              </StyledTab>
            </StyledTabsList>
          </TabsWrapper>
          <StyledTabPanel value={1} className="max-w-[900px] mx-auto">
            <div className="w-full mt-[30px] flex-row flex max-[900px]:flex-col h-[30vh]">
              <div className="w-1/3 bg-[#044a2f] p-6 rounded-[10px] max-[900px]:w-full flex flex-col justify-center items-center gap-y-[30px] h-full my-auto">
                <Brain />
                LearnUp's Study Buddy Feature, human or AI, can provide you a personalised assistance and real-time feedback, helping you understand complex topics and stay motivated throughout your studies.
              </div>
              <div className="grid grid-rows-2 grid-cols-2 gap-[20px] w-2/3 ml-[20px] max-[900px]:w-full max-[900px]:mt-[20px] max-[900px]:mx-auto max-[900px]:min-h-[40vh] max-[700px]:grid-cols-1 max-[700px]:grid-rows-4">
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Personalised Support
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Offers tailored guidance and real-time feedback (AI), adapting to indivdual learning styles. You can also find friends to be your studdy buddy as well!
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Motivation and Accountability
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Encourages consitent study habits with regular check-ins and reminders to stay in check. This mainly helps to keep you disciplined!
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Enhanced Learning
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Enriches learning through interactive discussions, multimedia content, and adaptive quizze, which are all available for free!
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Build Confidence
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Provides emotional support and positive reinforcement, reducing stress, and boosting your confidence in taking your exams!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledTabPanel>
          <StyledTabPanel value={2} className="max-w-[900px] mx-auto">
            <div className="w-full mt-[30px] flex-row flex max-[900px]:flex-col h-[30vh]">
              <div className="grid grid-rows-2 grid-cols-1 gap-[20px] w-[30%] ml-[20px] max-[900px]:w-full max-[900px]:mt-[20px] max-[900px]:mx-auto max-[900px]:min-h-[20vh] max-[700px]:grid-cols-1 max-[700px]:grid-rows-2">
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Integrated Study Materials
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Directly annotate and integrate lecture slides, textbooks, and other materials into your notes for a unified study experience.
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Interactive Diagrams and Visuals
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Create diagrams, mind maps, and flowcharts directly within your notes to simplify complex topics visually.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[35%] bg-[#044a2f] p-6 rounded-[10px] max-[900px]:w-full flex flex-col justify-center items-center gap-y-[30px] h-full ml-[20px] max-[900px]:mx-auto max-[900px]:mt-[20px]">
                <Note />
                LearnUp's Inbuilt Note-Taking App allows you to seamlessly organize your study materials, make quick notes during lectures, and sync your notes across all devices for easy access anytime.
              </div>
              <div className="grid grid-rows-2 grid-cols-1 gap-[20px] w-[30%] ml-[20px] max-[900px]:w-full max-[900px]:mt-[20px] max-[900px]:mx-auto max-[900px]:min-h-[20vh] max-[700px]:grid-cols-1 max-[700px]:grid-rows-2">
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Collaboration and Sharing
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Collaborate in real-time with classmates, share notes, edit together, and leave comments to enhance group study sessions.
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Smart Organisation and Search
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      AI organizes notes by topic and importance, with a powerful search function to quickly locate and highlight key information.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledTabPanel>
          <StyledTabPanel value={3} className="max-w-[900px] mx-auto">
            <div className="w-full mt-[30px] flex-row flex max-[900px]:flex-col h-[30vh]">
              <div className="grid grid-rows-2 grid-cols-2 gap-[20px] w-2/3 ml-[20px] max-[900px]:w-full max-[900px]:mt-[20px] max-[900px]:mx-auto max-[900px]:min-h-[40vh] max-[700px]:grid-cols-1 max-[700px]:grid-rows-4">
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Smart Scheduling
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Automatically adjusts your study plan based on deadlines, exam schedules, and personal commitments, optimizing your time without manual input.
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Interactive Timelines
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Provides a visual timeline with draggable tasks and deadlines, making it easy to see and adjust your study schedule at a glance.
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Syncing Integration
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Allows for sharing and syncing of calendars and tasks with study groups or tutors, facilitating collaborative planning and deadline management.
                    </div>
                  </div>
                </div>
                <div className="bg-[#089b63] rounded-[10px] flex justify-center items-center">
                  <div className="w-[80%] mx-auto">
                    <div className="text-lg font-semibold max-[900px]:text-base">
                      Custom Reminders
                    </div>
                    <div className="font-medium text-sm mt-[15px] max-[900px]:text-xs">
                      Offers advanced, customizable reminders and notifications that can be set for various types of tasks, including study sessions, assignment due dates, and breaks.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 bg-[#044a2f] p-6 rounded-[10px] max-[900px]:w-full flex flex-col justify-center items-center gap-y-[30px] h-full my-auto ml-[20px] max-[900px]:mx-auto max-[900px]:mt-[20px]">
                <Brain />
                The Integrated Calendar and Task Manager feature helps you stay organized and on top of your assignments by syncing your study schedule with your personal calendar for effective time management.
              </div>
            </div>
          </StyledTabPanel>
        </Tabs>
      </div>
    </div>
  );
}
