import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { Dialog } from '@headlessui/react'

import ExternalLink from 'components/common/base/ExternalLink'
import type { ProjectModel } from 'lib/models/project'
import convertDate from 'lib/utils/convertDate'

interface Props {
  isOpen: boolean
  handleOnClose: () => void
  project: ProjectModel
}

const ProjectDialog = ({ isOpen, handleOnClose, project }: Props) => {
  return (
    <Dialog open={isOpen} onClose={handleOnClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center overflow-scroll p-4 md:overflow-hidden">
        <Dialog.Panel className="mx-auto my-4 w-full space-y-4 rounded-3xl bg-white p-6 dark:bg-neutral-800 lg:w-2/3">
          <div className="flex items-center justify-between">
            <p>Project Details</p>
            <button onClick={handleOnClose}>X</button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div>
                <h4>{project.name}</h4>
                {project.company && <p>{project.company}</p>}
                <div className="flex space-x-1">
                  <span>{convertDate(project.startingDate)}</span>
                  <span>-</span>
                  {project.endDate ? (
                    <span>{convertDate(project.endDate)}</span>
                  ) : (
                    <span>Present</span>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                {project.url && (
                  <ExternalLink
                    type="text"
                    title="Visit website"
                    href={project.url}
                    iconLeft={
                      <FiExternalLink className="text-xl text-black dark:text-white" />
                    }
                  >
                    <span>Visit</span>
                  </ExternalLink>
                )}
                {project.sourceCode && (
                  <ExternalLink
                    type="text"
                    title="View source code"
                    href={project.sourceCode}
                    iconLeft={
                      <FaGithub className="text-xl text-black dark:text-white" />
                    }
                  >
                    <span>Source code</span>
                  </ExternalLink>
                )}
              </div>
            </div>
            <div>
              {project.type === 'Work'
                ? project.overview && (
                    <div>
                      <p className="break-words">{project.overview}</p>
                    </div>
                  )
                : project.image && (
                    <div className="flex justify-center py-2">
                      <img
                        className="rounded-xl"
                        src={project.image.secure_url}
                        alt={project.name}
                        width={500}
                        height={300}
                      />
                    </div>
                  )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.type === 'Work' ? (
              <div className="space-y-2">
                {project.role && (
                  <div>
                    <h5>Role</h5>
                    <p>{project.role}</p>
                  </div>
                )}
                {project.responsibility && (
                  <div>
                    <h5>What I do</h5>
                    <ul className="ml-5 list-disc">
                      {project.responsibility.map((value) => {
                        return (
                          <li key={value} className="break-words">
                            {value}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              project.overview && (
                <div>
                  <p className="break-words">{project.overview}</p>
                </div>
              )
            )}
            <div>
              <h5>Tech Stack</h5>
              <ul className="ml-5 list-disc">
                {project.techStack.map((stack) => {
                  return <li key={stack}>{stack}</li>
                })}
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ProjectDialog
