'use client'

import { FetchedRepoInfo } from "@/lib/types"
import { Octokit } from "@octokit/rest"

export const useRepoInfo = async (repoName: string) => {

  const octokit = new Octokit()
  const resp = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'Avtorre',
    repo: repoName
  })
  const readme = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}',
    {
      owner: 'Avtorre',
      repo: repoName,
      path: 'README.md',
      headers: {
        'accept': 'application/vnd.github.raw+json'
      }
    })
  const info:FetchedRepoInfo = {
    github: resp.data.html_url,
    description: readme.data.toString(),
    createdAt: resp.data.created_at.slice(0,10),
    size: resp.data.size + ' KB'
  }
  return  info
}