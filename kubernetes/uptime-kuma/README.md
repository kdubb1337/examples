# Uptime Kuma Kubernetes w/ Ansible

🧠 See the corresponding article for more details about using [Kubernetes w/ Ansible](https://www.erichreich.com/using-kubernetes-without-ansible-is-just-wrong/)

## Pre-Requisites

- Change `pv.yaml` to point to a usable storage in your cluster.

- Change the host in `ingress.yaml` to your liking.

- It is setup to create basic auth for you with username `foo` and password `password`

To change the username and password follow [these instructions](https://kubernetes.github.io/ingress-nginx/examples/auth/basic/) or if you don't want basic auth, just comment it out in `ansible/install.yaml`

## Getting Started

To deploy Uptime Kuma:

```bash
ansible-playbook kubernetes/uptime-kuma/ansible/install.yaml
```

To uninstall run:

```bash
ansible-playbook kubernetes/uptime-kuma/ansible/uninstall.yaml
```

To uninstall everything, including the data, run:

```bash
ansible-playbook kubernetes/uptime-kuma/ansible/dangerous-uninstall.yaml
```
